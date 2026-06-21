# Impostor Familiar (HTML)

Juego local para compartir un solo celular, con modos Impostor y Digalo con mimica.

## Como usar

### Impostor

1. Agrega jugadores (minimo 3).
2. Elige duracion y tema de palabras.
3. Pasa el celular para que cada jugador revele su rol.
4. Juega hasta que termine el temporizador.

Las palabras no se repiten durante la sesion. Cuando se completa el conjunto elegido, se mezcla nuevamente y comienza otro ciclo. Al terminar cada partida se puede marcar la palabra con like o dislike: los likes siguen participando normalmente y los dislikes quedan excluidos localmente. El panel `Valoraciones` permite restaurarlas, borrarlas o descargar `dislikes-impostor.txt`.

### Digalo con mimica

1. Elige una categoria de frases o `Aleatorio`.
2. Quien quiera actuar toma el celular y revela la frase.
3. Pasa al siguiente turno cuando terminen de adivinar.

Las 300 frases de mimica tienen varias palabras. Se muestran en orden aleatorio sin repetirse durante la sesion de la pestaña. Cuando se completa el conjunto elegido, se mezcla nuevamente y comienza otro ciclo.

Cada frase se puede marcar con like o dislike. Las valoraciones se guardan localmente en el navegador: los likes siguen apareciendo con la misma probabilidad, mientras que los dislikes quedan fuera de los proximos ciclos. El panel `Valoraciones` permite restaurarlas, borrarlas o descargar `dislikes.txt` para depurar el diccionario.

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

## Pruebas

```bash
node --test tests/mime-flow.test.cjs
```
