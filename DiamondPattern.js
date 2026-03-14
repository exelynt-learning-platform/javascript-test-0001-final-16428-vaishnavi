function printDiamond(n) {
  for (let i = 1; i <= n; i++) {
    let line = '';

    for (let s = 0; s < n - i; s++) {
      line += ' ';
    }

    if (i === 1) {
      line += '*';
    } else {
      line += '*';
      for (let s = 0; s < 2 * i - 3; s++) {
        line += ' ';
      }
      line += '*';
    }

    console.log(line);
  }

  for (let i = n - 1; i >= 1; i--) {
    let line = '';

    for (let s = 0; s < n - i; s++) {
      line += ' ';
    }

    if (i === 1) {
      line += '*';
    } else {
      line += '*';
      for (let s = 0; s < 2 * i - 3; s++) {
        line += ' ';
      }
      line += '*';
    }

    console.log(line);
  }
}

printDiamond(5);