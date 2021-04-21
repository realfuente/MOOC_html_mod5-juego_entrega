/**
 *  Cada uno de los personajes del juego, es decir, aquellos elementos que tienen “vida”.
 *  @extends Entity
 */
class Character extends Entity {
    /**
     * Inicializa un personaje
     * @param game {Game} La instancia del juego al que pertenece el personaje
     * @param width {Number} Ancho del personaje
     * @param height {Number} Alto del personaje
     * @param x {Number} Posición horizontal del personaje
     * @param y {Number} Posición vertical del personaje
     * @param speed {Number} Velocidad del personaje
     * @param myImage {String} Ruta de la imagen del personaje
     * @param myImageDead {String} Ruta de la imagen del personaje cuando muere
     * @param lives {Number} Vidas iniciales
     */
    constructor (game, width, height, x, y, speed, myImage, myImageDead,lives) {
        super(game, width, height, x, y, speed, myImage,lives);
        this.dead = false; // Indice si el personaje está vivo o muerto
        this.myImageDead = myImageDead;
        this.lives = lives;
    }

    /**
     * Mata a un personaje
     */
    collide() {
        this.image.src = this.myImageDead;
        this.dead = true;
    }
}

