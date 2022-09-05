import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
        <form>
          <Grid container>
          <Grid item sx={{ mt: 2 }} xs={12}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="Ingrese su nombre"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item sx={{ mt: 2 }} xs={12}>
              <TextField
                label="Correo"
                type="email"
                placeholder="tuemail@gmail.com"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Clave"
                type="password"
                placeholder="tu contraseña"
                fullWidth
              ></TextField>
            </Grid>

              <Grid container spacing="2" sx={{mb:2, mt:4}}>
                <Grid item xs={12} sm={12}>
                  <Button variant='contained' fullWidth>Crear cuenta</Button>
                </Grid>
                
              </Grid>
          </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}>Ya tienes una cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'>
                Ingresar
              </Link>
            </Grid>

        </form>
    </AuthLayout>

      
  );
};
