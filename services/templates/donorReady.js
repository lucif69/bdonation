
module.exports = ({ name, email, }) => {
    return `
        <html>

            <body>

                <div style="text-align: center">
                    <h3>A donor ready to donate!</h3>
                    <div>
                        <strong>Name</strong>: ${name}
                    </div>
                    <div>
                        <p>Please contact: ${email}</p>
                    </div>
                    
                </div>

            </body>

        </html>
    
    `;
};
