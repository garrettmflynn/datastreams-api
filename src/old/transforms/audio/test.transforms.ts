
export class AudioTest {
  constructor() {

  }

  async init() {
    
  }

  async transform(audioData:any, controller:TransformStreamDefaultController) {
    const speechData = audioData.copy() //model.getSpeechData(audioData);
    audioData.close();
    controller.enqueue(speechData);
  }

  deinit() {}
}
