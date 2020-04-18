import React from 'react';
import './rating_bar.css';
import commonHelpers from "../../common/CommonHelpers";

interface RatingBarState {
    listState: Array<Rate>
    currentRate: number
}

interface Rate {
    id_rate: number,
    state?: string
}

interface RatingBarProps {
    maxValue: number;
}

export class RatingBar extends React.Component<RatingBarProps, RatingBarState> {
    public static defaultProps = {
        maxValue: 8
    };

    constructor(props: RatingBarProps) {
        super(props);
        this.state = {
            listState: this.initRatingBar(props),
            currentRate: 0
        }
    };

    initRatingBar(props: RatingBarProps): Array<Rate> {
        let initListRatings = [];
        for (let i = 0; i < props.maxValue; i++) {
            initListRatings.push({
                id_rate: i,
                state: 'far'
            });
        }
        return initListRatings;
    };

    mouseEnter = (idRate: number) => {
        const rated = this.state.listState;
        const ratedValue = this.state.currentRate;
        rated.forEach((rate, i) => {
            rate.state = i <= idRate ? "fas" : "far";
        });
        this.setState({listState: rated, currentRate: ratedValue})
    };

    mouseOut = () => {
        const ratedList = this.state.listState;
        const ratedValue = this.state.currentRate;
        ratedList.forEach((rate, i) => {
            rate.state = i < ratedValue ? "fas" : "far";
        });
        this.setState({listState: ratedList, currentRate: ratedValue})
    };

    clickEvent = (idRate: number) => {
        const rated = this.state.listState;
        rated.forEach((rate, i) => {
            rate.state = i <= idRate ? "fas" : "far";
        });
        this.setState({listState: rated, currentRate: idRate + 1})
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="rating-bar">
                <div>Rating Value: {this.state.currentRate}</div>
                <br/>
                {
                    this.state.listState.map(value => {
                        return <i
                            onMouseEnter={() => this.mouseEnter(value.id_rate)}
                            onMouseOut={() => this.mouseOut()}
                            onClick={() => this.clickEvent(value.id_rate)}
                            key={value.id_rate}
                            className={value.state + ' fa-star '}
                        >
                        </i>
                    })
                }
                {commonHelpers.genJsFromCDN('https://kit.fontawesome.com/601ce7489b.js')}
            </div>
        );
    }
}