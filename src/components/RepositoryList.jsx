import RepositoryItem from "./RepositoryItem"
import '../styles/repositories.scss'

const repository = {
    name: 'uform',
    description: 'Form is React',
    link: 'http://github.com'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>

        </section>
    )
}