// src/app/api/users/route.ts
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
	try {
		const users = await prisma.user.findMany({
			orderBy: {
				id: "asc",
			},
		});

		return NextResponse.json(users, { status: 200 });
	} catch (error) {
		console.error("Erro ao buscar usuários:", error);

		return NextResponse.json({ error: "Falha ao buscar dados do servidor." }, { status: 500 });
	}
}

// Métodos HTTP:
// export async function POST(request: Request) { ... }
// export async function DELETE(request: Request) { ... }
