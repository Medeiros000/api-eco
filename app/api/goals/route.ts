// src/app/api/goals/route.ts
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const userId = searchParams.get("id") as string;

		const goals = await prisma.goal.findMany({
      where: { userId: userId ? Number.parseInt(userId) : undefined },
			orderBy: {
				id: "asc",
			},
		});

		return NextResponse.json(goals, { status: 200 });
	} catch (error) {
		console.error("Erro ao buscar metas:", error);

		return NextResponse.json({ error: "Falha ao buscar dados do servidor." }, { status: 500 });
	}
}

// Métodos HTTP:
// export async function POST(request: Request) { ... }
// export async function DELETE(request: Request) { ... }
