import { Heart, Facebook, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-primary" fill="currentColor" />
              <span className="text-xl font-bold text-foreground">Amigo de Pata</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Conectando corações e transformando vidas através da adoção responsável de cães.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/caes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Adotar um Cão
                </Link>
              </li>
              <li>
                <Link to="/apadrinhar" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Apadrinhar
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link to="/dicas" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Dicas Pet
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Ajuda</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/denuncias" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Denunciar Maus Tratos
                </Link>
              </li>
              <li>
                <Link to="/historias" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Histórias de Adoção
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Amigo de Pata. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
