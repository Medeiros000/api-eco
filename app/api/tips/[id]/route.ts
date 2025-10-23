// src/app/api/tips/[id]/route.ts
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id;
	const tipId = parseInt(id, 10);

	if (isNaN(tipId)) {
		return NextResponse.json({ error: "ID de dica inválido." }, { status: 400 });
	}

	try {
		const tip = await prisma.tip.findUnique({
			where: { id: tipId },
		});

		if (!tip) {
			return NextResponse.json({ error: "Dica não encontrada." }, { status: 404 });
		}

		return NextResponse.json(tip, { status: 200 });
	} catch (error) {
		console.error("Erro no Route Handler:", error);
		return NextResponse.json({ error: "Falha interna do servidor." }, { status: 500 });
	}
}
