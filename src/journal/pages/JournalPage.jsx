
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JorunalLayout } from "../layout/JorunalLayout";
import { NothingSelectedView, NoteView } from "../view";
//import { MailOutline } from "@mui/icons-material";
export const JournalPage = () => {
  return (
    <JorunalLayout>
      {/* <NothingSelectedView/> */}

      <NoteView/>
        <IconButton
        size='large'
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover': { backgroundColor: 'error.main', opacity:0.9 },
          position:'fixed',
          bottom:50,
          right:50

        }}
        >
            <AddOutlined sx={{ fontSize:30  }}  />
        </IconButton>
    </JorunalLayout>
  );
};
