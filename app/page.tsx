'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ApiRoute {
  method: string;
  path: string;
  description: string;
  color: string;
}

const routes: ApiRoute[] = [
  {
    method: 'GET',
    path: '/api/users',
    description: 'Lista todos os usuários registrados',
    color: 'bg-blue-500',
  },
  {
    method: 'GET',
    path: '/api/tips',
    description: 'Lista todas as dicas de sustentabilidade',
    color: 'bg-blue-500',
  },
  {
    method: 'GET',
    path: '/api/records',
    description: 'Lista todos os registros de atividades eco-friendly',
    color: 'bg-blue-500',
  },
];

export default function Home() {
  const [copiedRoute, setCopiedRoute] = useState<string | null>(null);

  const copyToClipboard = (path: string) => {
    navigator.clipboard.writeText(`http://localhost:3001${path}`);
    setCopiedRoute(path);
    setTimeout(() => setCopiedRoute(null), 2000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src="/leaf.svg"
              alt="API Eco Logo"
              width={60}
              height={60}
              className="drop-shadow-lg"
              priority
            />
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              EcoLar API
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Jornada Sustentável
          </p>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Gerencie dados de sustentabilidade e hábitos ecológicos dos usuários.
            Uma API RESTful construída com Next.js, Prisma e PostgreSQL.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              {routes.length}
            </div>
            <p className="text-gray-600 dark:text-gray-300">Endpoints Disponíveis</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              RESTful
            </div>
            <p className="text-gray-600 dark:text-gray-300">Arquitetura Padrão</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              Eco
            </div>
            <p className="text-gray-600 dark:text-gray-300">Focado em Sustentabilidade</p>
          </div>
        </div>

        {/* Routes Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="text-green-600">🔌</span> Rotas da API
          </h2>

          <div className="grid gap-4">
            {routes.map((route, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 border-l-4 border-l-green-500"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`${route.color} text-white px-3 py-1 rounded-full text-sm font-bold w-16 text-center`}
                      >
                        {route.method}
                      </span>
                      <code className="text-gray-900 dark:text-gray-100 font-mono font-semibold">
                        {route.path}
                      </code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm ml-20">
                      {route.description}
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(route.path)}
                    className="sm:shrink-0 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                  >
                    {copiedRoute === route.path ? '✓ Copiado!' : 'Copiar'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="text-blue-600">⚙️</span> Stack Tecnológico
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Next.js', icon: '▲' },
              { name: 'Prisma ORM', icon: '◆' },
              { name: 'PostgreSQL', icon: '🐘' },
              { name: 'TypeScript', icon: 'TS' },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-linear-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg shadow-lg p-8 mb-16 border border-green-200 dark:border-green-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span>🚀</span> Comece Agora
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">1.</span>
              <span>
                Configure sua variável de ambiente <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">DATABASE_URL</code> no arquivo <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">.env</code>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">2.</span>
              <span>
                Execute as migrações: <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">npx prisma migrate dev</code>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">3.</span>
              <span>
                Comece a fazer requisições para os endpoints acima
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">4.</span>
              <span>
                Visualize os dados com <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">npx prisma studio</code>
              </span>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p>
            API Eco • Construído com{' '}
            <span className="text-green-600 dark:text-green-400">♻️</span> para
            um futuro mais sustentável
          </p>
          <p className="text-sm mt-2">
            © 2025 Jornada Sustentável • Todos os direitos reservados
          </p>
        </div>
      </div>
    </div>
  );
}
