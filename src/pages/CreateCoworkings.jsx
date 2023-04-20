
import Header from "../layout/Header";
const CreateCoworkings = () => {
    const handleSubmit = (event)=> {
        event.prevent.default ();
        const name = event.target.name.value;

        fetch("http://localhost:3000/api/coworkings"), {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

        body: JSON.stringify({
        name: name,
        })
        }}

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Nom:
                    <input type= "texte" name="name"/>
                </label>
            </div>
            <div>
                <button type="submit">Créer coworking</button>
            </div>
        </form>
    )
}
export default CreateCoworkings;