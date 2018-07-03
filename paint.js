class Painter {
  static get inputProperties() {
    return ['--start-color', '--end-color'];
  }
  paint(ctx, size, props) {
    const g = ctx.createLinearGradient(0, 0, size.width, size.height);
    let startColor = props.get('--start-color').toString();
    let endColor = props.get('--end-color').toString();
    g.addColorStop(0, startColor);
    g.addColorStop(1, endColor);
    ctx.fillStyle = g;
    // ctx.strokeStyle = g;
    // ctx.lineWidth = 2;
    // ctx.strokeStyle = '#666';
    // ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.lineTo(size.width, size.height);
    ctx.fillRect(0, 0, size.width, size.height);
  }
}

registerPaint('el', Painter);