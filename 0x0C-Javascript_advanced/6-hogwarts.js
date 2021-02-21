class studentHogwarts {
    privateScore = 0;
    name = null;

    _changeScoreBy (points) {
        this.privateScore += points;
    }

    setName (newName) {
        this.name = newName;
    }

    rewardStudent () {
        this._changeScoreBy(1);
    }

    penalizeStudent () {
        this._changeScoreBy(-1);
    }

    getScore () {
        return `${this.name}: ${this.privateScore}`;
    }
}
