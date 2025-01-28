import Menu from "../components/Menu"
import { MemoryRouter } from "react-router-dom"

export default {
    title: 'Components/Menu',
    component: Menu,
    decorators: [(Story) => (<MemoryRouter><Story /></MemoryRouter>)],
    tags: ['autodocs'],
}

export const Default = { }