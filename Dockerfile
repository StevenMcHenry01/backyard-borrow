# designate environment
FROM node

# create app directory
WORKDIR /backyard-borrow

# what to copy 
# basically creating yarn workspace inside docker image
COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/shared/package.json ./packages/shared/

# install deps
RUN npm i -g yarn --force
RUN yarn install --production

# copy over all compiled code
COPY ./packages/server/dist ./packages/server/dist
COPY ./packages/shared/dist ./packages/shared/dist
COPY ./packages/server/.env.prod ./packages/server/.env
COPY ./ormconfig.json .

# designate running directory
WORKDIR /backyard-borrow/packages/server

ENV NODE_ENV production

# designate port to expose
EXPOSE 8080

CMD ["node", "dist/index.js"]