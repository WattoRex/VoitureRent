import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-header">
                Vibrez au rythme de la ville, laissez la Twingo être votre mélodie.
            </div>
            <div className="footer-links">
                <div className="link">
                    <h5>Marketplace</h5>
                    <p>Accueil</p>
                    <p>Rejoingez-nous !</p>
                    <p>Explore</p>
                </div>
                <div className="link">
                    <h5>Entreprise</h5>
                    <p>A-propos</p>
                    <p>L'Equipe</p>
                </div>
                <div className="link">
                    <h5>Contact</h5>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                </div>
            </div>
        </div>

    );
};

export default Footer;
