export default function UserInput({ onInput }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required onChange={(e) => onInput("initialInvestment", e.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required onChange={(e) => onInput("annualInvestment", e.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required onChange={(e) => onInput("expectedReturn", e.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required onChange={(e) => onInput("duration", e.target.value)} />
                </p>
            </div>
        </section>
    )
}