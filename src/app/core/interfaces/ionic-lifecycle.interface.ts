export interface IonicLifecycle {

    /**
    *Fired when the component routing to is about to animate into view.
    */
    ionViewWillEnter?();

    /**
     * Fired when the component routing to has finished animating.
    */
    ionViewDidEnter?();

    /** 
     * Fired when the component routing from is about to animate.
    */
    ionViewWillLeave?();

    /**
     * Fired when the component routing to has finished animating.
     */
    ionViewDidLeave?();

}