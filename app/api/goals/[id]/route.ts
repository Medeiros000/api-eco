// src/app/api/goals/[id]/route.ts
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id;
	const goalId = parseInt(id, 10);

	if (isNaN(goalId)) {
		return NextResponse.json({ error: "ID de objetivo inválido." }, { status: 400 });
	}

	try {
		const goal = await prisma.goal.findUnique({
			where: { id: goalId },
		});

		if (!goal) {
			return NextResponse.json({ error: "Objetivo não encontrado." }, { status: 404 });
		}

		return NextResponse.json(goal, { status: 200 });
	} catch (error) {
		console.error("Erro no Route Handler:", error);
		return NextResponse.json({ error: "Falha interna do servidor." }, { status: 500 });
	}
}
