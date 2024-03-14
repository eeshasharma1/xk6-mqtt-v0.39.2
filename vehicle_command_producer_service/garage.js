/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.Garage');
goog.provide('proto.Garage.Action');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Garage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Garage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Garage.displayName = 'proto.Garage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Garage.prototype.toObject = function(opt_includeInstance) {
  return proto.Garage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Garage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Garage.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 4, 0),
    token: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Garage}
 */
proto.Garage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Garage;
  return proto.Garage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Garage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Garage}
 */
proto.Garage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {!proto.Garage.Action} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Garage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Garage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Garage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Garage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Garage.Action = {
  UNSET: 0,
  OPEN: 1,
  CLOSE: 2,
  GET_STATE: 3
};

/**
 * optional Action action = 4;
 * @return {!proto.Garage.Action}
 */
proto.Garage.prototype.getAction = function() {
  return /** @type {!proto.Garage.Action} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.Garage.Action} value */
proto.Garage.prototype.setAction = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string token = 5;
 * @return {string}
 */
proto.Garage.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.Garage.prototype.setToken = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


