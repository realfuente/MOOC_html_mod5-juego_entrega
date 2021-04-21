/**
 * Boss final
 */

class Boss extends Opponent {

    /**
     * @param game {Game} La instancia del juego al que pertenece el oponente
     */
    constructor(game) {

        super(game);
        this.myImage = BOSS_PICTURE;
        this.myImageDead = BOSS_PICTURE_DEAD;
        this.image.src = this.myImage;
        this.speed = this.speed * 2;
    }

}