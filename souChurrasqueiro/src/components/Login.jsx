import React from "react";
import souChurras from "../assets/img/souChurras.jpg";
import { TextField, Button, Box, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <Box 
      sx={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", 
        width: "100vw", // Garante que ocupa toda a largura da tela
        bgcolor: "#bbdefb", // Azul mais claro para o fundo
      }}
    >
      <Card sx={{ width: "90%", maxWidth: 400, p: 3, boxShadow: 3, bgcolor: "#ffffff" }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Box display="flex" justifyContent="center" mb={2}>
            <img src={souChurras} alt="Sou Churrasqueiro" style={{ width: "100px", borderRadius: "50%" }} />
          </Box>
          <Typography variant="h5" gutterBottom>
            Bem vindo, faça seu login
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Digite seu email"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Digite sua senha"
              variant="outlined"
              type="password"
              margin="normal"
              required
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth 
              sx={{ mt: 2 }}
            >
              Entrar
            </Button>
          </form>
          <Typography variant="body2" sx={{ mt: 2 }}>
          Ainda não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;