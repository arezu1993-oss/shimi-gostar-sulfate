import { NextResponse } from "next/server";
import { partnershipSchema } from "@/lib/validations/partnership";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = partnershipSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "اطلاعات فرم معتبر نیست.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = result.data;

    const partnership = await prisma.partnership.create({
      data: {
        fullName: data.fullName,
        companyName: data.companyName || null,
        phone: data.phone,
        email: data.email || null,
        cooperationType: data.cooperationType,
        city: data.city,
        description: data.message,
      },
    });

    return NextResponse.json(
      {
        ok: true,
        message: "درخواست همکاری با موفقیت ثبت شد.",
        id: partnership.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Partnership API error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "خطایی در ثبت درخواست رخ داد.",
      },
      { status: 500 },
    );
  }
}
