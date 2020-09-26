let player = {
    play: undefined,
    choose: function () {
        let value = document.querySelector('#playerChoice').value;

        if (value == 'none')
            alert('Selecione uma opção antes de jogar!');
        else
            this.play = value;

    },
    show: function () {
        switch (this.play) {
            case 'rock': document.querySelector('#playerHand').src = "./img/rock.png"; break;
            case 'paper': document.querySelector('#playerHand').src = "./img/paper.png"; break;
            case 'scissors': document.querySelector('#playerHand').src = "./img/scissors.png"; break;
        }
    }
}

let pc = {
    play: undefined,
    choose: function () {
        let value = Math.floor(Math.random() * 3 + 1);
        switch (value) {
            case 1: this.play = 'rock'; break;
            case 2: this.play = 'paper'; break;
            case 3: this.play = 'scissors'; break;
        }
    },
    show: function () {
        switch (this.play) {
            case 'rock': document.querySelector('#pcHand').src = "./img/rock.png"; break;
            case 'paper': document.querySelector('#pcHand').src = "./img/paper.png"; break;
            case 'scissors': document.querySelector('#pcHand').src = "./img/scissors.png"; break;
        }
    }
}

let game = {

    /* 
        Pedra ganha da tesoura (quebrando-a).
        Papel ganha da pedra (embrulhando-a).
        Tesoura ganha do papel (cortando-o).
    */

    processValues: function () {
        player.choose();
        pc.choose();

        player.show();
        pc.show();

        console.log(player.play);
        console.log(pc.play);

        setTimeout(function () {
            if (player.play == pc.play) {
                alert('Empate!');
            } else if (
                (player.play == 'rock' && pc.play == 'scissors') ||
                (player.play == 'paper' && pc.play == 'rock') ||
                (player.play == 'scissors' && pc.play == 'paper')
            ) {
                alert('Vencedor: Jogador!')
            } else {
                alert('Vencedor: Computador!')
            }
        }, 1500)
    }
}