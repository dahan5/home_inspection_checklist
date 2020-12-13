const mongoose = require('mongoose');

const ChecklistSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  exterior: {
    back_doors: {
      type: String,
    },
    deck: {
      type: String,
    },
    doorbell: {
      type: String,
    },
    driveway: {
      type: String,
    },
    front_doors: {
      type: String,
    },
    garage_doors: {
      type: String,
    },
    garbage_receptacle: {
      type: String,
    },
    house_number: {
      type: String,
    },
    mailbox: {
      type: String,
    },
    outdoor_lights: {
      type: String,
    },
    paint_and_trim: {
      type: String,
    },
    parking: {
      type: String,
    },
    recycling_receptacle: {
      type: String,
    },
    sidewalks: {
      type: String,
    },
    siding: {
      type: String,
    },
    traffic_noise: {
      type: String,
    },
    windows: {
      type: String,
    },
    notes: {
      type: String,
    },
  },

  yard: {
    drainage: {
      type: String,
    },
    fences: {
      type: String,
    },
    retaining_wall: {
      type: String,
    },
    shed: {
      type: String,
    },
    sprinklers: {
      type: String,
    },
    swimming_pool: {
      type: String,
    },
    notes: {
      type: String,
    },
  },

  roof: {
    chimney: {
      type: String,
    },
    gutters: {
      type: String,
    },
    soffits: {
      type: String,
    },
    notes: {
      type: String,
    },
  },

  garage: {
    ceiling: {
      type: String,
    },
    doors: {
      type: String,
    },
    floors: {
      type: String,
    },
    lights: {
      type: String,
    },
    storage: {
      type: String,
    },
    walls: {
      type: String,
    },
    windows: {
      type: String,
    },
    notes: {
      type: String,
    },
  },
});

module.exports = Checklist = mongoose.model('checklist', ChecklistSchema);
