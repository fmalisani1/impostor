# Impostor Familiar (HTML)

Prototipo del juego tipo "Impostor" para jugar en un solo celular, con tema oscuro.

## Como usar

1. Agrega jugadores (minimo 3).
2. Elige duracion.
3. Inicia partida.
4. Pasa el celular y cada jugador revela su rol.
5. Al final empieza el temporizador.
6. Cuando termina, puedes jugar de nuevo.

## Diccionario

El archivo `palabras.txt` se usa como diccionario.
Cada palabra o frase va en una linea distinta.

## Ejecutar local en Chrome

Opciones:

1) Sin servidor (abrir `index.html` directo):
- Funciona igual y usa diccionario integrado de respaldo.
- Si quieres usar tu propio `palabras.txt`, usa el boton "Seleccionar palabras.txt".
- El diccionario elegido se guarda en cache local del navegador.

2) Con servidor local (recomendado para tomar `palabras.txt` automaticamente):

```bash
python -m http.server 5500
```

Luego abre:

```text
http://localhost:5500
```

Tambien puedes subir estos mismos archivos a cualquier hosting estatico.
