FROM ghcr.io/getzola/zola:v0.15.3 as buildstage

RUN mkdir /build /build-farer
COPY . /build
COPY . /build-farer
WORKDIR /build
RUN zola build
WORKDIR /build-farer
RUN zola build --base-url "https://matt.fa"
##############################################
FROM caddy:2.5.1-alpine

RUN mkdir /srv/public /srv/farer
COPY --from=buildstage /build /srv/public
COPY --from=buildstage /build /srv/farer
COPY /srv/Caddyfile /srv/Caddyfile

RUN ["caddy run --config /srv/Caddyfile --adapter Caddyfile"]
