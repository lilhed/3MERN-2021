import {Component} from 'react'
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {lists: [], title: '', description: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        fetch('http://localhost:8000/lists')
            .then(res => res.json())
            .then(res => this.setState({lists: res}))
            .catch(err => err)
    }

    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();

        fetch('http://localhost:8000/lists', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                if(data.success){
                    this.setState({
                        lists: [...this.state.lists, data.list],
                        title: '',
                        description: ''
                    })
                }else{
                    alert('Une erreur est survenue')
                }
            })
            .catch(err => err)
    }

    render(){
        return (
            <div>
                <div className="row g-3">
                    {this.state.lists.map((list, index) => {
                        return <div className="col-md-4" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{list.title}</h5>
                                    <p className="card-text">{list.description}</p>
                                </div>
                                <div className="card-footer">
                                    Test
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <hr/>
                <div className="row g-3">
                    <div className="col-md-6 offset-md-3">
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Titre</label>
                                <input type="text" className="form-control" name="title" id="title" value={this.state.title} onChange={this.handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input type="text" className="form-control" name="description" id="description" value={this.state.description} onChange={this.handleChange}/>
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary w-100">
                                Ajouter
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
