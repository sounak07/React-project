const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Profile = require('../../models/Profile');

const validateProfileData = require('../../validations/profile');

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .then((profile) => {
        if (!profile) {
          errors.noprofile = 'There is no profile for the user';
          res.status(404).json(errors);
        }

        res.status(200).json(profile);
      })
      .catch((e) => {
        res.status(404).json(e);
      });
  }
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // const errors = {};

    const { errors, isValid } = validateProfileData(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const profileField = {};
    profileField.user = req.user.id;
    if (req.body.handle) profileField.handle = req.body.handle;
    if (req.body.age) profileField.age = req.body.age;
    if (req.body.email) profileField.email = req.body.email;
    if (req.body.sex) profileField.sex = req.body.sex;
    if (req.body.location) profileField.location = req.body.location;

    Profile.findOne({ user: req.user.id }).then((profile) => {
      // Create new profile
      if (!profile) {
        Profile.findOne({ handle: profileField.handle }).then((profile) => {
          if (profile) {
            errors.handle = 'handle already exists';
            res.status(400).json(errors);
          }
        });
        new Profile(profileField).save().then((profile) => res.json(profile));
      } else {
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileField },
          { new: true }
        ).then((profile) => res.json(profile));
      }
    });
  }
);

module.exports = router;
