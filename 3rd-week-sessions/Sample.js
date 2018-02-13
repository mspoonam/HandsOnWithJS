import axios from "axios" // 0.17.1

async fetchUsers() {
    this.setState({ loading: true })
    const users = await axios.get(`https://randomuser.me/api?results=10`)
    const singleProfile = this.state.profiles  
    console.log(singleProfile)
}

fetchUsers()

const singleProfile = this.state.profiles  