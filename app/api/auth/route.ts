// src/app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";
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

export async function POST(request: NextRequest) {
	const body = await request.json();
	const userDB = await prisma.user.findUnique({
		where: { email: body.email },
	});
	if (userDB) {
		return NextResponse.json({ error: "Usuário com este email já existe." }, { status: 409 });
	}
	const user = await prisma.user.create({
		data: {
			username: body.username,
			email: body.email,
			password: body.password,
			info: {
				create: {
					full_name: body.full_name,
					name: body.name,
				},
			},
		},
	});

	return NextResponse.json(user, { status: 201 });
}

// Métodos HTTP:
// export async function DELETE(request: Request) { ... }
