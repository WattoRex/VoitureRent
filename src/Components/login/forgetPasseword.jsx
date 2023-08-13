import React from 'react';

const ForgotPasswordForm = () => {
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Logique de réinitialisation de mot de passe
    //   };

    return (
        <div className="card">
            <div className="card2">
                <form className="form">
                    {/* onSubmit={handleSubmit} Ajouter au-dessus */}
                    <p id="heading">Mot de passe oublié</p>
                    <div className="field">
                        <svg
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                            className="input-icon"
                        >
                            {/* Chemin SVG */}
                        </svg>
                        <input
                            type="email"
                            className="input-field"
                            placeholder="Adresse e-mail"
                            autoComplete="off"
                        />
                    </div>
                    <div className="btn">
                        <button className="button1">Réinitialiser le mot de passe</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;
