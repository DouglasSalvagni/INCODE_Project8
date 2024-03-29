const mongoose = require('mongoose');

var ticketSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
	description: {
		type: String,
		required: true
	},
	creator: {
		type: String,
		required: true
	},
	responsible: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    comments: [
        {
            value: String,
        }
    ]
},{ timestamps: { createdAt: 'created_at' }})


ticketSchema.methods = {
	getId: function () {
        return this.id;
    }
}

module.exports = mongoose.model('Ticket', ticketSchema);