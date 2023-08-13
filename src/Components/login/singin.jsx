import React from 'react';

const RegistrationForm = () => {
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Ajoutez ici la logique de soumission du formulaire d'inscription
    //   };

    return (
        <div className="card">
            <div className="card2">
                <form className="form">
                    {/* onSubmit={handleSubmit} A mettre au-dessus */}
                    <p id="heading">Inscription</p>
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
                            type="text"
                            className="input-field"
                            placeholder="Nom d'utilisateur"
                            autoComplete="off"
                        />
                    </div>
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
                            type="text"
                            className="input-field"
                            placeholder="Nom complet"
                            autoComplete="off"
                        />
                    </div>
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
                            type="password"
                            className="input-field"
                            placeholder="Mot de passe"
                        />
                    </div>
                    <div className="btn">
                        <button className="button1">S'inscrire</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;