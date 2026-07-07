import type { Handler } from "@netlify/functions";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const partnershipSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(8),
  city: z.string().min(2),
  cooperationType: z.string().min(1),
  cooperationTypeLabel: z.string().min(1),
  message: z.string().optional(),
  submittedAt: z.string().optional(),
  form: z.string().optional(),
});

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Supabase environment variables are missing",
      }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const data = partnershipSchema.parse(body);

    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    const { error } = await supabase.from("partnership_requests").insert({
      full_name: data.fullName,
      phone: data.phone,
      city: data.city,
      cooperation_type: data.cooperationType,
      cooperation_type_label: data.cooperationTypeLabel,
      message: data.message || null,
      submitted_at: data.submittedAt || new Date().toISOString(),
      form: data.form || "partnership",
    });

    if (error) {
      console.error("Supabase insert error:", error);

      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Failed to save partnership request" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Partnership request saved successfully",
      }),
    };
  } catch (error) {
    console.error("Partnership function error:", error);

    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid request data" }),
    };
  }
};

export { handler };
