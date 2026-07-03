export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-foreground/70 mb-8">Página não encontrada</p>
        <a href="/" className="btn-outline-gold">
          Voltar para Home
        </a>
      </div>
    </div>
  );
}
