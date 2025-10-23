// src/app/api/users/[id]/route.ts
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id;
	const userId = parseInt(id, 10);

	if (isNaN(userId)) {
		return NextResponse.json({ error: "ID de usuário inválido." }, { status: 400 });
	}

	try {
		const user = await prisma.user.findUnique({
			include: {
				records: true,
				tips: true,
			},
			where: { id: userId },
		});

		if (!user) {
			return NextResponse.json({ error: "Usuário não encontrado." }, { status: 404 });
		}

		return NextResponse.json(user, { status: 200 });
	} catch (error) {
		console.error("Erro no Route Handler:", error);
		return NextResponse.json({ error: "Falha interna do servidor." }, { status: 500 });
	}
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id;
	const userId = parseInt(id, 10);

	if (isNaN(userId)) {
		return NextResponse.json({ error: "ID de usuário inválido." }, { status: 400 });
	}
	try {
		const body = await request.json();
		const { name, email } = body;

		const user = await prisma.user.update({
			where: { id: userId },
			data: { name, email },
		});

		return NextResponse.json(user, { status: 200 });
	} catch (error) {
		console.error("Erro no Route Handler:", error);
		return NextResponse.json({ error: "Falha interna do servidor." }, { status: 500 });
	}
}
