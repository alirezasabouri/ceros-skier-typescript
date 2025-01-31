/**
 * An obstacle that appears on the mountain. Randomly created as one of the types defined in the OBSTACLE_TYPES array.
 */

import { IMAGE_NAMES, OBSTACLE_INTERACTION_TYPES, OBSTACLE_TYPE_CATEGORY} from "../../Constants";
import { Canvas } from "../../Core/Canvas";
import { ImageManager } from "../../Core/ImageManager";
import { randomInt } from "../../Core/Utils";
import { Entity } from "../Entity";

/**
 * The different types of obstacles that can be placed in the game.
 */
const OBSTACLE_TYPES: {imageName: IMAGE_NAMES, typeCategory:OBSTACLE_TYPE_CATEGORY, interactionType: OBSTACLE_INTERACTION_TYPES}[] = [
    { imageName: IMAGE_NAMES.TREE, typeCategory: OBSTACLE_TYPE_CATEGORY.TREE, interactionType: OBSTACLE_INTERACTION_TYPES.CRASH},
    { imageName: IMAGE_NAMES.TREE_CLUSTER, typeCategory: OBSTACLE_TYPE_CATEGORY.TREE, interactionType: OBSTACLE_INTERACTION_TYPES.CRASH},
    { imageName: IMAGE_NAMES.ROCK1, typeCategory: OBSTACLE_TYPE_CATEGORY.ROCK, interactionType: OBSTACLE_INTERACTION_TYPES.CRASH},
    { imageName: IMAGE_NAMES.ROCK2, typeCategory: OBSTACLE_TYPE_CATEGORY.ROCK, interactionType: OBSTACLE_INTERACTION_TYPES.CRASH},
    { imageName: IMAGE_NAMES.JUMP_RAMP, typeCategory: OBSTACLE_TYPE_CATEGORY.JUMPRAMP, interactionType: OBSTACLE_INTERACTION_TYPES.JUMP}
];

export class Obstacle extends Entity {
    /**
     * The name of the current image being displayed for the obstacle.
     */
    imageName: IMAGE_NAMES;

    interactionType: OBSTACLE_INTERACTION_TYPES;

    typeCategory : OBSTACLE_TYPE_CATEGORY;

    /**
     * Initialize an obstacle and make it a random type.
     */
    constructor(x: number, y: number, imageManager: ImageManager, canvas: Canvas) {
        super(x, y, imageManager, canvas);

        const typeIdx = randomInt(0, OBSTACLE_TYPES.length - 1);
        this.imageName = OBSTACLE_TYPES[typeIdx].imageName;
        this.interactionType = OBSTACLE_TYPES[typeIdx].interactionType;
        this.typeCategory = OBSTACLE_TYPES[typeIdx].typeCategory;
    }

    /**
     * Obstacles can't be destroyed
     */
    die() {}
}
