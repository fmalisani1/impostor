# Impostor Familiar (HTML)

Prototipo del juego tipo "Impostor" para jugar en un solo celular, con tema oscuro.

## Como usar

1. Agrega jugadores (minimo 3).
2. Si quieres, usa el boton `AGREGAR MALISANIS` para cargar: Fede, Clari, Marta, Norbert, Dani y Romi.
3. Elige duracion.
4. Elige el tema de palabras (o `Aleatorio`).
5. Inicia partida.
6. Pasa el celular y cada jugador revela su rol.
7. Al final empieza el temporizador.
8. Cuando termina, puedes jugar de nuevo.

## Diccionario

El archivo `diccionario.txt` se usa como diccionario principal.

Formato recomendado (facil de editar):

```text
[Nombre de categoria]
Palabra 1
Palabra 2
Palabra 3

[Otra categoria]
Palabra 1
Palabra 2
```

Notas:
- `Aleatorio` toma una categoria al azar.
- Se usa vocabulario en espanol rioplatense/argentino y apto para chicos.

## Ejecutar local en Chrome

Opciones:

1) Sin servidor (abrir `index.html` directo):
- Funciona igual y usa diccionario integrado de respaldo.
- Si quieres usar tu propio diccionario, usa el boton "Seleccionar diccionario".
- El diccionario elegido se guarda en cache local del navegador.

2) Con servidor local (recomendado para tomar `diccionario.txt` automaticamente):

```bash
python -m http.server 5500
```

Luego abre:

```text
http://localhost:5500
```

Tambien puedes subir estos mismos archivos a cualquier hosting estatico.
