<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

$response = [
    'success' => false,
    'message' => ''
];

/**
 * ارسال پاسخ JSON و پایان اجرای برنامه
 */
function sendResponse(bool $success, string $message, int $statusCode = 200): void
{
    http_response_code($statusCode);

    echo json_encode(
        [
            'success' => $success,
            'message' => $message
        ],
        JSON_UNESCAPED_UNICODE
    );

    exit;
}

/**
 * پاک‌سازی مقادیر متنی
 */
function cleanText($value): string
{
    if (!is_string($value)) {
        return '';
    }

    return trim(strip_tags($value));
}

/**
 * جلوگیری از Header Injection
 */
function cleanHeaderValue(string $value): string
{
    return str_replace(["\r", "\n"], '', $value);
}

// فقط درخواست POST مجاز است
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');

    sendResponse(
        false,
        'Method not allowed.',
        405
    );
}

// دریافت بدنه JSON
$rawInput = file_get_contents('php://input');

if ($rawInput === false || trim($rawInput) === '') {
    sendResponse(
        false,
        'Request body is empty.',
        400
    );
}

$data = json_decode($rawInput, true);

if (!is_array($data) || json_last_error() !== JSON_ERROR_NONE) {
    sendResponse(
        false,
        'Invalid JSON input.',
        400
    );
}

// دریافت و پاک‌سازی فیلدها
$fullName = cleanText($data['fullName'] ?? '');
$phone = cleanText($data['phone'] ?? '');
$city = cleanText($data['city'] ?? '');
$cooperationType = cleanText($data['cooperationType'] ?? '');
$cooperationTypeLabel = cleanText(
    $data['cooperationTypeLabel'] ?? $cooperationType
);
$companyName = cleanText($data['companyName'] ?? '');
$emailInput = cleanText($data['email'] ?? '');
$message = cleanText($data['message'] ?? '');
$submittedAt = cleanText($data['submittedAt'] ?? '');

// بررسی فیلدهای ضروری
if (
    $fullName === '' ||
    $phone === '' ||
    $cooperationType === '' ||
    $message === ''
) {
    sendResponse(
        false,
        'Required fields are missing.',
        422
    );
}

// اعتبارسنجی ایمیل اختیاری
$email = '';

if ($emailInput !== '') {
    $validatedEmail = filter_var($emailInput, FILTER_VALIDATE_EMAIL);

    if ($validatedEmail === false) {
        sendResponse(
            false,
            'Invalid email address.',
            422
        );
    }

    $email = cleanHeaderValue($validatedEmail);
}

// جلوگیری از ورود خط جدید به اطلاعات ایمیل
$fullName = cleanHeaderValue($fullName);
$phone = cleanHeaderValue($phone);

// ===================================================
// بعداً این دو مقدار را با اطلاعات کارفرما جایگزین کن
// ===================================================

$to = 'info@shimigostar.com';

$fromEmail = 'forms@shimigostar.com';

// ===================================================

$subject = 'New Partnership Form Submission';

// ساخت محتوای ایمیل
$emailContent = "A new partnership request has been submitted.\n\n";
$emailContent .= "Full Name: {$fullName}\n";
$emailContent .= "Phone: {$phone}\n";
$emailContent .= "City: {$city}\n";
$emailContent .= "Cooperation Type: {$cooperationTypeLabel}";

if (
    $cooperationType !== '' &&
    $cooperationType !== $cooperationTypeLabel
) {
    $emailContent .= " ({$cooperationType})";
}

$emailContent .= "\n";

if ($companyName !== '') {
    $emailContent .= "Company Name: {$companyName}\n";
}

if ($email !== '') {
    $emailContent .= "Email: {$email}\n";
}

$emailContent .= "\nMessage:\n{$message}\n";

if ($submittedAt !== '') {
    $emailContent .= "\nSubmitted At: {$submittedAt}\n";
}

// هدرهای ایمیل
$headers = [
    'From: Shimi Gostar Website <' . $fromEmail . '>',
    'Reply-To: ' . ($email !== '' ? $email : $fromEmail),
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion()
];

// ارسال ایمیل
$mailSent = mail(
    $to,
    $subject,
    $emailContent,
    implode("\r\n", $headers)
);

if (!$mailSent) {
    error_log('Partnership form email could not be sent.');

    sendResponse(
        false,
        'Failed to send email. Please try again later.',
        500
    );
}

sendResponse(
    true,
    'Form submitted successfully.'
);