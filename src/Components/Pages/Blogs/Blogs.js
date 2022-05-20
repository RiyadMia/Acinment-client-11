import React from "react";
import PageTaitle from "../PageTaitle/PageTaitle";

const Blogs = () => {
  return (
    <div className="container">
      <PageTaitle title="Blogs"></PageTaitle>
      <h2>Difference between javascript and nodejs ?</h2>
      <br />
      <h5>JavaScript</h5>
      <p>
        1. It is an open-source, cross-platform, interpreted, lightweight
        scripting programming language that is used to develop dynamic and web
        applications
      </p>
      <p>
        2. It is a programming language. It works in any browser that has a
        proper browser engine.
      </p>
      <p>3. It is generally used on the client-side server.</p>
      <p>4. All the JavaScript is not important to the node community.</p>
      <p>5. It is designed to build network-centric applications.</p>
      <p>
        6. It's a newer version of the ECMA script that runs on Chrome's V8
        engine, which is written in C++.
      </p>
      <br />
      <h5> Node JS</h5>
      <p>
        1. It is a cross-platform, open-source JavaScript runtime environment
        that allows JavaScript to be run on the server.
      </p>
      <p>
        2. It's a JavaScript interpreter and environment with some valuable
        libraries that JavaScript programming can use separately.
      </p>
      <p>3. It is generally used on the server-side.</p>
      <p>4. All node projects represent the JavaScript community.</p>
      <p>
        4. Node JS is only supported by the V8 engine, which Google Chrome
        mostly uses. Any JavaScript program written with Node JS will always be
        run in the V8 engine.
      </p>
      <p>
        5. It's designed for data-intensive real-time applications that run on
        several platforms.
      </p>
      <p>6. It uses C, C++, and JavaScript</p>
      <br />
      <h2>2. When should you use nodejs and when should you use mongodb ?</h2>
      <br />
      <p>
        This is the first in a series of blog posts examining the technologies
        that are driving the development of modern web and mobile applications,
        notably the MERN and MEAN stacks. The series will go on to step through
        tutorials to build all layers of an application.
      </p>
      <h5>Node.js</h5>
      <p>
        Node.js : JavaScript runtime environment – lets you implement your
        application back-end in JavaScript
      </p>
      <p>
        Node.js is a JavaScript runtime environment that runs your back-end
        application
      </p>
      <p>
        Node.js is based on Google's V8 JavaScript engine which is used in the
        Chrome browsers. It also includes a number of modules that provides
        features essential for implementing web applications – including
        networking protocols such as HTTP. Third party modules, including the
        MongoDB driver, can be installed, using the npm tool.
      </p>
      <h5>MongoDB</h5>
      <p>
        MongoDB : Document database – used by your back-end application to store
        its data as JSON (JavaScript Object Notation) documents
      </p>
      <p>
        MongoDB Atlas is a database as a service for MongoDB, letting you focus
        on apps instead of ops. With MongoDB Atlas, you only pay for what you
        use with a convenient hourly billing model. With the click of a button,
        you can scale up and down when you need to, with no downtime, full
        security, and high performance.
      </p>
      <h2>3. Differences between sql and nosql databases ?</h2>
      <br />
      <h5>SQL Databases</h5>
      <p>1. Tables with fixed rows and columns</p>
      <p>2. Developed in the 1970s with a focus on reducing data duplication</p>
      <p>3. Oracle, MySQL, Microsoft SQL Server, and PostgreSQL</p>
      <p>4. General purpose</p>
      <p>5. Vertical (scale-up with a larger server)</p>
      <h5>NoSQL Databases</h5>
      <p>
        1. Document: JSON documents, Key-value: key-value pairs, Wide-column:
        tables with rows and dynamic columns, Graph: nodes and edges
      </p>
      <p>
        2. Developed in the late 2000s with a focus on scaling and allowing for
        rapid application change driven by agile and DevOps practices.
      </p>
      <p>
        3. Document: MongoDB and CouchDB, Key-value: Redis and DynamoDB,
        Wide-column: Cassandra and HBase, Graph: Neo4j and Amazon Neptune
      </p>
      <p>4. Horizontal (scale-out across commodity servers)</p>
      <p>
        5. Most do not support multi-record ACID transactions. However,
        some—like MongoDB—do.
      </p>
      <p>
        6. Many do not require ORMs. MongoDB documents map directly to data
        structures in most popular programming languages.
      </p>
      <h2>4. What is the purpose of jwt and how does it work ?</h2>
      <br />
      <p>
        JWTs differ from other web tokens in that they contain a set of claims.
        Claims are used to transmit information between two parties. What these
        claims are depends on the use case at hand. For example, a claim may
        assert who issued the token, how long it is valid for, or what
        permissions the client has been granted. JWT or JSON Web Token, is an
        open standard used to share security information between two parties — a
        client and a server. Each JWT contains encoded JSON objects, including a
        set of claims. JWTs are signed using a cryptographic algorithm to ensure
        that the claims cannot be altered after the token is issued. The payload
        contains the claims. This is displayed as a JSON string, usually
        containing no more than a dozen fields to keep the JWT compact. This
        information is typically used by the server to verify that the user has
        permission to perform the action they are requesting.
      </p>
    </div>
  );
};

export default Blogs;
