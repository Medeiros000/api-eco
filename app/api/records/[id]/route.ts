// src/app/api/records/[id]/route.ts
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> }
  ) {

	const id = (await params).id;
	const recordId = parseInt(id, 10);

	if (isNaN(recordId)) {
		return NextResponse.json({ error: "ID de registro inválido." }, { status: 400 });
	}

	try {
		const record = await prisma.record.findUnique({
			where: { id: recordId },
		});

		if (!record) {
			return NextResponse.json({ error: "Registro não encontrado." }, { status: 404 });
		}

		return NextResponse.json(record, { status: 200 });
	} catch (error) {
		console.error("Erro no Route Handler:", error);
		return NextResponse.json({ error: "Falha interna do servidor." }, { status: 500 });
	}
}
