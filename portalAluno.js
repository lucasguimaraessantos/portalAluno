import React, { useState, useEffect } from 'react';
import { 
  User, 
  BookOpen, 
  IdCard, 
  GraduationCap, 
  Calendar, 
  CheckCircle, 
  AlertCircle,
  LogOut,
  Bell,
  Sun,
  Moon
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('perfil');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Alternar entre temas
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Dados fictícios do aluno
  const aluno = {
    nome: "Cíntia Matos Ribeiro",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxJg2f4HkzRngiUp7gkNaf9k99J_rOhfs8Q&s",
    ra: "2024001589",
    curso: "Publicidade e Propaganda",
    periodo: "2º Semestre",
    instituicao: "UNINTER",
    validade: "12/2028"
  };

  const disciplinas = [
    { id: 1, nome: "Estrutura de Dados", nota: 8.5, faltas: 2, status: "Aprovado", carga: "80h" },
    { id: 2, nome: "Cálculo Diferencial II", nota: 6.0, faltas: 8, status: "Em curso", carga: "60h" },
    { id: 3, nome: "Arquitetura de Computadores", nota: 9.2, faltas: 0, status: "Aprovado", carga: "40h" },
    { id: 4, nome: "Banco de Dados NoSQL", nota: 7.8, faltas: 4, status: "Em curso", carga: "60h" },
    { id: 5, nome: "Metodologias Ágeis", nota: 10.0, faltas: 1, status: "Aprovado", carga: "40h" }
  ];

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'} font-sans max-w-md mx-auto shadow-2xl transition-colors duration-300 overflow-hidden relative border-x border-gray-200 dark:border-slate-800`}>
      
      {/* Header Fixo */}
      <header className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'} px-6 py-4 flex justify-between items-center border-b sticky top-0 z-10 transition-colors`}>
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <GraduationCap size={20} className="text-white" />
          </div>
          <h1 className="font-bold text-lg tracking-tight">Portal Aluno</h1>
        </div>
        <div className="flex gap-2 items-center">
          {/* Botão de Troca de Tema */}
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-yellow-400 hover:bg-slate-800' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-slate-400 hover:bg-slate-800' : 'text-gray-500 hover:bg-gray-100'}`}>
            <Bell size={20} />
          </button>
          <button className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-slate-400 hover:bg-slate-800' : 'text-gray-500 hover:bg-gray-100'}`}>
            <LogOut size={20} />
          </button>
        </div>
      </header>

      {/* Conteúdo Principal (Scrollable) */}
      <main className="flex-1 overflow-y-auto pb-24">
        
        {activeTab === 'perfil' && (
          <div className="p-6 animate-in fade-in duration-500">
            {/* Foto e Info Básica */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                <img 
                  src={aluno.foto} 
                  alt="Perfil" 
                  className={`w-28 h-28 rounded-full border-4 ${isDarkMode ? 'border-slate-800' : 'border-blue-100'} shadow-md object-cover`}
                />
                <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white dark:border-slate-900"></div>
              </div>
              <h2 className="mt-4 text-xl font-bold text-center">{aluno.nome}</h2>
              <p className="text-blue-500 font-medium">{aluno.curso}</p>
              <p className={`${isDarkMode ? 'text-slate-500' : 'text-gray-500'} text-sm`}>RA: {aluno.ra}</p>
            </div>

            {/* Carteirinha Digital */}
            <div className="mb-8">
              <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>Carteirinha Digital</h3>
              <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[10px] opacity-70 uppercase font-bold">Instituição</p>
                    <p className="text-sm font-bold">{aluno.instituicao}</p>
                  </div>
                  <IdCard size={24} className="opacity-50" />
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] opacity-70 uppercase font-bold">Nome do Aluno</p>
                    <p className="text-md font-semibold">{aluno.nome}</p>
                  </div>
                  
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[10px] opacity-70 uppercase font-bold">RA</p>
                      <p className="text-sm font-mono">{aluno.ra}</p>
                    </div>
                    <div>
                      <p className="text-[10px] opacity-70 uppercase font-bold">Validade</p>
                      <p className="text-sm font-mono">{aluno.validade}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/20 flex items-center gap-2">
                   <div className="bg-white p-1 rounded">
                      <div className="w-8 h-8 bg-gray-800 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-white"></div>
                      </div>
                   </div>
                   <p className="text-[10px] leading-tight opacity-80">Apresente este código para acesso ao campus e biblioteca.</p>
                </div>
              </div>
            </div>

            {/* Outros Atalhos */}
            <div className="grid grid-cols-1 gap-3">
              <button className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-100' : 'bg-white border-gray-100 hover:bg-gray-50'}`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100/10 text-orange-500 rounded-lg"><Calendar size={18}/></div>
                  <span className="font-medium">Calendário Acadêmico</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>
              <button className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-100' : 'bg-white border-gray-100 hover:bg-gray-50'}`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100/10 text-purple-500 rounded-lg"><BookOpen size={18}/></div>
                  <span className="font-medium">Biblioteca Digital</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'academico' && (
          <div className="p-6 animate-in slide-in-from-right duration-400">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Grade Curricular</h2>
              <p className={isDarkMode ? 'text-slate-500' : 'text-gray-500'}>Semestre Atual: 2024.1</p>
            </div>

            {/* Filtros */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">Todas</button>
              <button className={`${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border text-gray-600'} px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap`}>Em Curso</button>
            </div>

            {/* Lista de Disciplinas */}
            <div className="space-y-4">
              {disciplinas.map((disc) => (
                <div key={disc.id} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} border rounded-2xl p-4 shadow-sm transition-colors`}>
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold leading-tight flex-1 pr-4">{disc.nome}</h4>
                    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-md ${
                      disc.status === 'Aprovado' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'
                    }`}>
                      {disc.status}
                    </span>
                  </div>
                  
                  <div className={`grid grid-cols-3 gap-4 border-t pt-3 ${isDarkMode ? 'border-slate-800' : 'border-gray-100'}`}>
                    <div className="text-center">
                      <p className="text-[10px] text-gray-500 uppercase font-semibold">Média</p>
                      <p className={`text-lg font-bold ${disc.nota >= 7 ? 'text-green-500' : 'text-orange-500'}`}>
                        {disc.nota.toFixed(1)}
                      </p>
                    </div>
                    <div className={`text-center border-x ${isDarkMode ? 'border-slate-800' : 'border-gray-100'}`}>
                      <p className="text-[10px] text-gray-500 uppercase font-semibold">Faltas</p>
                      <p className={`text-lg font-bold ${disc.faltas > 5 ? 'text-red-500' : (isDarkMode ? 'text-slate-300' : 'text-gray-700')}`}>
                        {disc.faltas}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] text-gray-500 uppercase font-semibold">Carga</p>
                      <p className={`text-lg font-bold ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{disc.carga}</p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className="text-gray-500">Presença</span>
                      <span className="font-semibold">{Math.round(((parseInt(disc.carga) - (disc.faltas * 2)) / parseInt(disc.carga)) * 100)}%</span>
                    </div>
                    <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'} w-full rounded-full h-1.5`}>
                      <div 
                        className={`h-1.5 rounded-full ${disc.faltas > 5 ? 'bg-red-500' : 'bg-green-500'}`} 
                        style={{ width: `${((parseInt(disc.carga) - (disc.faltas * 2)) / parseInt(disc.carga)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Tab Bar Inferior */}
      <nav className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'} border-t px-6 py-3 flex justify-around items-center sticky bottom-0 z-20 pb-8 transition-colors`}>
        <button 
          onClick={() => setActiveTab('perfil')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'perfil' ? 'text-blue-500 scale-110' : 'text-slate-500'}`}
        >
          <User size={24} fill={activeTab === 'perfil' ? 'currentColor' : 'none'} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Perfil</span>
        </button>
        
        <div className={`w-px h-8 ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'}`}></div>

        <button 
          onClick={() => setActiveTab('academico')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'academico' ? 'text-blue-500 scale-110' : 'text-slate-500'}`}
        >
          <BookOpen size={24} fill={activeTab === 'academico' ? 'currentColor' : 'none'} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Acadêmico</span>
        </button>
      </nav>

      {/* Decorative background circle */}
      <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-40 bg-blue-600 -z-10 rounded-b-[3rem] opacity-5`}></div>
    </div>
  );
};

export default App;
