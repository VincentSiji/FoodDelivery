const express = require('express');
const calculateItemPrice = require('../common/calculateItemPrice.js');
const { body, validationResult } = require('express-validator');

const calculatePrice = express.Router();

calculatePrice.post('/',
    [
        body('zone').notEmpty().withMessage('Zone is required'),
        body('organization_id').notEmpty().withMessage('Organization Id is required'),
        body('total_distance').notEmpty().withMessage('Total distance is required'),
        body('item_type').notEmpty().withMessage('Item type is required'),
    ],
    async (req, res) => {
        try {
            console.log("called")
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const data = req?.body;
            const { zone, organization_id, total_distance, item_type } = data;

            const price = calculateItemPrice({ zone, organization_id, total_distance, item_type })
            res.status(200).send({
                total_price: parseFloat(price.toFixed(2))
            });

        } catch (error) {

        }
    })

module.exports = calculatePrice;

