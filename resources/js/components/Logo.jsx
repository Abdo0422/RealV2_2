import './Logo.css'

function Logo({ classi }) {
    return (
        <button data-text="Awesome" className={classi}>
        <span className="actual-text">&nbsp;REAL&nbsp;</span>
        <span className="hover-text" aria-hidden="true">&nbsp;REAL&nbsp;</span>
    </button>
    )
}

export default Logo