const [video, setVideo] = useState("");
const [selected, setSelected] = useState("");

const handleSubmit = async(e) => {
    e.preventDefault()
    try {  
        const response = await UserFinder.post("/video ", {
            video
        });
        console.log(response);
    } catch (err) {
        console.log("uh oh")
    }
};

<Form>
<FormGroup>
    <FormLabel>rtsp link</FormLabel>
    <FormControl value={video} onChange= {e => setVideo(e.target.value)}
    type="text" placeholder="rtsp link"/>
    <br />
    <Button onClick={handleSubmit} variant="outline-success" align="right" type="submit">watch</Button>
</FormGroup>
</Form>