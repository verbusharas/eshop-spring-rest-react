package lt.verbus.backend.security;

import static lt.verbus.backend.security.SecurityConstants.AUTHORIZATION_HEADER;
import static lt.verbus.backend.security.SecurityConstants.AUTHORIZATION_HEADER_PREFIX;
import static org.apache.commons.lang3.StringUtils.*;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;


public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

    private JwtProvider jwtProvider;

    public JwtAuthorizationFilter(AuthenticationManager authenticationManager, JwtProvider jwtProvider) {
        super(authenticationManager);
        this.jwtProvider = jwtProvider;
    }

    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {

        //TODO:ŠITAS GRAŽINA NULL!! (FIREWALLED REQUEST??)
        String authorizationHeader = request.getHeader("Authorization");

     if (isNotEmpty(authorizationHeader) && authorizationHeader.startsWith(AUTHORIZATION_HEADER_PREFIX)){
         String jwt = authorizationHeader.replace(AUTHORIZATION_HEADER_PREFIX, "");
         Authentication authentication = jwtProvider.getAuthentication(jwt);

         if (authentication == null) {
             chain.doFilter(request, response);
             return;
         }

         SecurityContextHolder.getContext().setAuthentication(authentication);
     }
        chain.doFilter(request,response);
    }

}
