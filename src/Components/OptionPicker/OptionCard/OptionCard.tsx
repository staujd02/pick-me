import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';

const OptionCard: React.FunctionComponent<OptionCardProps> = ({handleClick, option}) => (
    <Card>
        <CardActionArea onClick={handleClick}>
            <Typography>{option.title}</Typography>
            <img src={option.image} />
        </CardActionArea>
    </Card>
)

export default OptionCard;