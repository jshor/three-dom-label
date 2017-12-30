import {Matrix4, Vector3, Object3D, Frustum} from 'three';

export default class ThreeDomLabel extends Object3D {

  constructor(settings) {
    super();

    this.text = settings.text;
    this.camera = settings.camera;
    this.className = settings.className;
    this.maxDistance = settings.maxDistance || Infinity;
    this.minDistance = settings.minDistance || 0;

    this._mount();
    this._addEventListeners(settings);
    this._requestAnimationFrame();
  }

  /**
   * Removes the label from the scene.
   */
  unmount = () => {
    document.body.removeChild(this.span);
  }

  /**
   * Sets the class name of the DOM element.
   * 
   * @param {String} className
   */
  setClass = (className) => {
    this.span.className = className;
  }

  /**
   * Adds the label from the scene.
   *
   * @private
   * @param {String} text - label text
   */
  _mount = (text) => {
    this.span = document.createElement('span');
    this.span.innerHTML = this.text;
    this.span.className = this.className;

    document.body.appendChild(this.span);
  }

  /**
   * Attaches event listeners from the given settings.
   * 
   * @private
   * @param {Object} settings
   * @param {Object} settings.events - key/value pair of event types
   *                                 and their respective functions
   */
  _addEventListeners = (settings) => {
    const {events} = settings;

    if (events) {
      for (const eventType in events) {
        this.span.addEventListener(eventType, events[eventType]);
      }
    }
  }

  /**
   * Attaches to window's requestAnimationFrame and updates label position on each frame.
   * If the label is out of range of the camera, it becomes hidden.
   * @private
   */
  _requestAnimationFrame = () => {
    const isInRange = this._isInRange();
    const position = this._getWorldPosition(this);
    const coords = this._translateWorldToScreen(position, this.camera);

    if (isInRange && coords) {
      this.span.style.color = '#fff';
      this.span.style.position = 'absolute';
      this.span.style.top = `${coords.top}px`;
      this.span.style.left = `${coords.left}px`;
      this.span.style.visibility = 'visible';
    } else {
      this.span.style.visibility = 'hidden';
    }

    window.requestAnimationFrame(this._requestAnimationFrame.bind(this));
  }

  /**
   * Returns the magnitude between the target object and camera.
   * 
   * @private
   * @returns {Number} magnitude
   */
  _getDistanceToCamera = () => {
    const cameraPosition = this._getWorldPosition(this.camera);
    const objectPosition = this._getWorldPosition(this);

    return cameraPosition.distanceTo(objectPosition);
  }

  /**
   * Check if the target object is within the set range of the camera.
   * 
   * @private
   * @returns {Boolean} returns true when in range
   */
  _isInRange = () => {
    const distance = this._getDistanceToCamera();

    return distance >= this.minDistance && distance <= this.maxDistance;
  }

  /**
   * Translate 3D space coordinates to 2D screen ones.
   *
   * @private
   * @returns {Object} coordinates with `top` and `left` values
   */
  _translateWorldToScreen = (position, camera) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const matrix = new Matrix4();

    if (position && camera) {
      const {x, y, z} = position;
      const pos = new Vector3(x, y, z);
      
      matrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);

      if (this._isInCameraView(camera, matrix, pos)) {
        pos.applyMatrix4(matrix);

        const left = (1 + pos.x) * width / 2;
        const top = (1 - pos.y) * height / 2;
        
        return {top, left};
      }
    }
    return null;
  }

  /**
   * Checks if the given vector is within the given camera frustum.
   *
   * @private
   * @param {Camera} camera - active renderer camera
   * @param {Matrix4} matrix - projection matrix
   * @param {Vector3} vector - vector to check if in frustum
   * @returns {Boolean} whether or not vector is in frustum
   */
  _isInCameraView = (camera, matrix, vector) => {
    const frustum = new Frustum();
    frustum.setFromMatrix(matrix);
    
    return frustum.containsPoint(vector);
  }

  /**
   * Returns the vector w.r.t. <0> of the given mesh.
   *
   * @private
   * @returns {Vector3} world position
   */
  _getWorldPosition = (obj) => {
    const vect = new Vector3();

    vect.setFromMatrixPosition(obj.matrixWorld);

    return vect;
  }
}