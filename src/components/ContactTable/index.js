import {
  Typography,
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import {format} from "date-fns";
import {CopyToClipboardText} from "../CopyToClipboardText";
import {NATIONALITIES_HUMAN_NAME} from "../../constants/nationals";


export const ContactTable = ({data}) => {
  console.log(data)

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell align='left'>Full name</TableCell>
            <TableCell align='left'>Birthday</TableCell>
            <TableCell align='left'>Email</TableCell>
            <TableCell align='left'>Phone</TableCell>
            <TableCell align='left'>Location</TableCell>
            <TableCell align='left'>Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <TableRow
              key={user.login.uuid}
            >
              <TableCell>
                <Avatar
                  alt={user.name.title + user.name.first}
                  src={user.picture.thumbnail}
                />
              </TableCell>
              <TableCell align='left'>
                {user.name.title}. {user.name.first} {user.name.last}
              </TableCell>
              <TableCell align='left'>
                <Typography>
                  {format(new Date(user.dob.date), "EEEE, dd/MM/yyyy, pp")}
                </Typography>
                <Typography>{user.dob.age} years</Typography>
              </TableCell>
              <TableCell align='left'>
                <CopyToClipboardText text={user.email}/>
              </TableCell>
              <TableCell align='left'>
                <CopyToClipboardText text={user.phone}/>
              </TableCell>
              <TableCell align='left'>{user.location.city}</TableCell>
              <TableCell align='left'>{NATIONALITIES_HUMAN_NAME[user.nat]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactTable;