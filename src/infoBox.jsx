import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({infos}) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1684444605542-93725082d214?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    return (
    <div className="InfoBox">
        <h1>Your Notes </h1>
        <Card sx={{ maxWidth: 345, margin : "0 auto" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="Notes image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {infos.title || "No title"}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"div"}>
          {infos.content || "No content provided"}
        </Typography>
      </CardContent>
    </Card>
    </div>
 );
}